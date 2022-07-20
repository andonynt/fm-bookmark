const d = document;

const tabMenu = () => {
  const $dataTabs = d.querySelectorAll('[data-tab]'),
    $tabContent = d.querySelectorAll('[data-content]')

  d.addEventListener('click', e => {
    if(e.target.matches('.tab-btn') || e.target.matches('.tab-btn > *')){
      //console.log(e.target.children)
      let dataTab;
      !e.target.getAttribute('data-tab') ? dataTab = e.target.parentElement.getAttribute('data-tab') : dataTab = e.target.getAttribute('data-tab')
      
      $dataTabs.forEach($dataTab => {
        if($dataTab.getAttribute('data-tab') === dataTab){
          $dataTab.lastElementChild.classList.remove('opacity-0');
          $dataTab.lastElementChild.classList.add('opacity-1');
        } else {
          $dataTab.lastElementChild.classList.remove('opacity-1');
          $dataTab.lastElementChild.classList.add('opacity-0');
        }
      });

      $tabContent.forEach($article => {
        if($article.id === dataTab){
          $article.classList.remove('hidden');
          $article.classList.add('flex');
        } else {
          $article.classList.add('hidden');
          $article.classList.remove('flex');
        }
      })

    }
  })
};

export default tabMenu;