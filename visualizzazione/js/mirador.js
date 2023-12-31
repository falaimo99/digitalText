// var mirador = Mirador.viewer({
//     "id": "mirador-lady-du-barry",
//     "manifests": {
//     "manifest.json" : {
//         "provider": "Wikidata"
//     }
//     },
//     "windows": [
//     {
//         "loadedManifest": "https://www.nga.gov/api/v1/iiif/presentation/manifest.json?cultObj:id=172073",
//         "canvasIndex": 0,
//         "thumbnailNavigationPosition": 'far-bottom'
//     }
//     ]
// });

{
	"@context": "http://iiif.io/api/presentation/2/context.json",
	"@id": "http://dade149d-1bbc-4871-a85d-5dcca2a91b01",
	"@type": "sc:Manifest",
	"label": "[Click to edit label]",
	"metadata": [],
	"description": [
		{
			"@value": "[Click to edit description]",
			"@language": "en"
		}
	],
	"license": "https://creativecommons.org/licenses/by/3.0/",
	"attribution": "[Click to edit attribution]",
	"sequences": [
		{
			"@id": "http://2ad3e81a-83bb-4460-a153-7a7a784c21eb",
			"@type": "sc:Sequence",
			"label": [
				{
					"@value": "Normal Sequence",
					"@language": "en"
				}
			],
			"canvases": [
				{
					"@id": "http://800857fa-f36b-4592-9282-e4be53674bd6",
					"@type": "sc:Canvas",
					"label": "Empty canvas",
					"height": 986,
					"width": 1600,
					"images": [
						{
							"@context": "http://iiif.io/api/presentation/2/context.json",
							"@id": "http://315cae7e-4a25-46e5-8a62-d71a3fca5397",
							"@type": "oa:Annotation",
							"motivation": "sc:painting",
							"resource": {
								"@id": "https://dharound.world/iiif/2/Gell_taccuino_6_pag_028-029.jpg/full/full/0/default.jpg",
								"@type": "dctypes:Image",
								"format": "image/jpeg",
								"service": {
									"@context": "http://iiif.io/api/image/2/context.json",
									"@id": "https://dharound.world/iiif/2/Gell_taccuino_6_pag_028-029.jpg",
									"profile": [
										"http://iiif.io/api/image/2/level2.json",
										{
											"formats": [
												"jpg",
												"tif",
												"gif",
												"png"
											],
											"qualities": [
												"bitonal",
												"default",
												"gray",
												"color"
											],
											"supports": [
												"regionByPx",
												"sizeByW",
												"sizeByWhListed",
												"cors",
												"regionSquare",
												"sizeByDistortedWh",
												"canonicalLinkHeader",
												"sizeByConfinedWh",
												"sizeByPct",
												"jsonldMediaType",
												"regionByPct",
												"rotationArbitrary",
												"sizeByH",
												"baseUriRedirect",
												"rotationBy90s",
												"profileLinkHeader",
												"sizeByForcedWh",
												"sizeByWh",
												"mirroring"
											]
										}
									]
								},
								"height": 986,
								"width": 1600
							},
							"on": "http://800857fa-f36b-4592-9282-e4be53674bd6"
						}
					],
					"related": ""
				}
			]
		}
	],
	"structures": []
}