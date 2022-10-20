
function test() {

  let endPoint = "https://us-documentai.googleapis.com"
  let version = '/v1/'
  let projectId = 'document-processing-365723'
  let loction = 'us'
  let processorId = '77f8d16cd51b6381'
  let parent = 'projects/' + projectId + '/locations/' + loction
  let action = ':fetchProcessorTypes'
  let response = UrlFetchApp.getRequest(endPoint + version + parent + action)
  console.log(response)
}

function callDocumentAI(file) {
  let endPoint = "https://us-documentai.googleapis.com"
  let projectId = 'document-processing-365723'
  let loction = 'us'
  let processorId = '77f8d16cd51b6381'

  let requestBody = {
    "skipHumanReview": false,
    "fieldMask": 'string',
    "rawDocument": {
      "content": DriveApp.getFileById('1LOkUFSBWDg7sA5Ptl66MB_1iA4droQiW').getBlob().getBytes(),
      "mimeType": DriveApp.getFileById('1LOkUFSBWDg7sA5Ptl66MB_1iA4droQiW').getMimeType()
    }
    // End of list of possible types for union field source.
  }
  let prosseorType = {
    "name": 'string', //The resource name of the processor type. Format: projects/{project}/processorTypes/{processor_type}
    "type": 'string', //The type of the processor, e.g., "invoice_parsing".
    "category": 'string', //The processor category, used by UI to group processor types.
    "availableLocations": [
      {
        "locationId": 'us'//object(LocationInfo)
      }
    ],
    "allowCreation": false,
    "launchStage": UNIMPLEMENTED
  }




  //let request = UrlFetchApp.fetch()
  //console.log(response)
}

function getFileBytes() {
  let file = DriveApp.getFilesByName('9-10-2012 Statement.pdf').next()
  let bytes = file.getBlob().getBytes()
  return bytes
}