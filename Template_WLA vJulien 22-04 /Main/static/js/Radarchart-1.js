
			//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(600, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////

			var data = [
					  [//ROUGE
						{axis:"Produits pour Bébé",value:383400},
						{axis:"Beauté",value:430000},
						{axis:"Nature",value:234202},
						{axis:"Médicaments et Santé",value:123000},
						{axis:"Orthopédie et Confort",value:92300},
						{axis:"Matériel",value:111929}
					  ],[//BLEU
						{axis:"Produits pour Bébé",value:231929},
						{axis:"Beauté",value:220000},
						{axis:"Nature",value:234202},
						{axis:"Médicaments et Santé",value:432000},
						{axis:"Orthopédie et Confort",value:430000},
						{axis:"Matériel",value:383400}
					  ]
					];
			//////////////////////////////////////////////////////////////
			//////////////////// Draw the Chart //////////////////////////
			//////////////////////////////////////////////////////////////

			var color = d3.scale.ordinal()
				.range(["#CC333F","#067ab4"]);

			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 500000,
			  levels: 5,
			  roundStrokes: true,
			  color: color
			};
			//Call function to draw the Radar chart
			RadarChart(".radarChart-1", data, radarChartOptions);
