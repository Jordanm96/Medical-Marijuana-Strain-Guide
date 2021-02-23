const nameUrl = "http://strainapi.evanbusse.com/jqekE0U/strains/search/name"


// Create Try/Catch
const getStrainInfo = async (inputValue) => {
  const url = `${nameUrl}/${inputValue}`
  try {
    removeStrainSearch()
    const response = await axios.get(url)
    const grabData = response.data
    grabData.forEach(grabData => {
      displayStrainInfo(grabData)
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
// getStrainInfo('strawberry')


// Event Listener for Button

const searchBtn = document.querySelector('#go')
searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const userInput = document.querySelector('input').value
  getStrainInfo(userInput)
  document.querySelector('input').value = ""
})


// Append the strain data to the div ('.search-results')
function displayStrainInfo(grabData) {
  const strainList = document.querySelector('.strain-list')
  const strainInfo = `
  <div class = "strainStuff">
  <h1 class = "strainName">Name: ${grabData.name}</h1>
  <h3 class = "race">Species: ${grabData.race}</h3>
  <p class = "description"><strong>Description:</strong> ${grabData.desc}</p>
  </div>
  `

  strainList.insertAdjacentHTML("beforeend", strainInfo)
}
// * In my p class I'd like to set a "No description available" if grabData.desc is null
// * In my results class, I want it to read the index NUMBER of the names that were found 
// * Example: Displaying Results (22): grabData.length = undefined



// Remove the strain search from html
// Don't forget to add this function into our try catch
function removeStrainSearch() {
  const strainContainer = document.querySelector('.strain-list')
  while (strainContainer.lastChild) {
    strainContainer.removeChild(strainContainer.lastChild)
  }
}