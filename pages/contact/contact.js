console.log(window.location)
window.history.pushState({}, 'Title prim','#primer')
if(window.location.hash === '#primer') {
  console.table('test')
}