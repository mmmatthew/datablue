const wikidata_fountain_config = {
    "sub_sources":[],
  "claims": [
    {
      "claim": "P571",
      "property": "construction_date",
      "rank": 1,
      "value_translation": val=>{
        return parseInt(val.substring(0,4));
      }
    },{
      "claim": "P1476",
      "property": "name",
      "rank": 1
    },{
      "claim": "P137",
      "property": "operator_name",
      "value_translation": val=>{switch(val){
        case "Q27229237": return "Wasserversorgung Zürich";
      }},
      "rank": 1
    },{
      "claim": "P2795",
      "property": "directions",
      "rank": 2
    },{
      "claim": "P5282",
      "property": "pano_url",
      "rank": 1
    },{
      "claim": "P18",
      "property": "image_url",
      "rank": 1
    },{
      "claim": "P625",
      "property": "coords_wikidata",
      "rank": 2
    }
  ]
  };

export default wikidata_fountain_config;