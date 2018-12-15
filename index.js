const input = document.querySelector('input[type="file"]');
input.addEventListener('change', function(e) {
	console.log(input.files);
	const reader = new FileReader();
	reader.onload = function() {
		console.log(reader.result);
		const lines = reader.result.split('\n').map(function(line) {
			return line.split(' ');
		})
		console.log(lines);
		
		var dict = new Map();
		for (i = 0; i < lines.length; i++)
		{
			console.log(i, lines[i].length);
			for (j = 0; j < lines[i].length; j++)
			{
				key = lines[i][j].toLowerCase();
				console.log("read key =", key);
				if (key.length != 0) {				
					if (key.endsWith(",") 
						|| key.endsWith(".") 
						|| key.endsWith("?") 
						|| key.endsWith(":") 
						|| key.endsWith(";") 
						|| key.endsWith("!")
						|| key.endsWith("\"")  
						|| key.endsWith("'") )
				{
					key = key.slice(0, (key.length - 1));
					console.log("after slice the end => ", key);
				}
				if (key.startsWith("\"") || key.startsWith("'"))
				{
					key = key.slice(1);
					console.log("after slice the start => ", key);
				}
				if (dict.has(key))
				{
					count = dict.get(key);
					count = count + 1;
					dict.set(key, count);

				}
				else 
				{
					dict.set(key.toLowerCase(), 1);
				}
				}

			}
		}

		console.log(dict);
	}
	reader.readAsText(input.files[0]);
}, false);