
let APIKey = 'AIzaSyDpeMPC6IHbuhjESFPBW9lsdMGgiX7M5xU';

function doGet() {
  return HtmlService.createTemplateFromFile('Main').evaluate();
}

function buildJSONRequestImgUrl(imgUrl) {
  return JSON.stringify({
    requests: [{
      image: {
        source: {
          imageUri: imgUrl
        }
      },
      features: [{
        type: "DOCUMENT_TEXT_DETECTION",
        maxResults: 1
      }]
    }]
  });
}

let imgUrl = 'https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/images/TMP_RichTextLineIndent.png'
function makeRequest(imgUrl= 'https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/images/TMP_RichTextLineIndent.png') {
  // Make a POST request to Vision API with a JSON payload.      
  var visionApiUrl = 'https://vision.googleapis.com/v1/images:annotate?key=' +
    APIKey;
  var JSON_REQ = buildJSONRequestImgUrl(imgUrl);
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON_REQ
  };
  var response = UrlFetchApp.fetch(visionApiUrl, options);
  return response.getContentText();
}