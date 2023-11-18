var CETEIcean = new CETEI()
CETEIcean.getHTML5("../produced_data/body.xml", function(data) {
  document.getElementById("TEI").appendChild(data)
})
new CETEI({
    ignoreFragmentId: true
  })