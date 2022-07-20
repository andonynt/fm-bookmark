const d = document;

const formValidation = () => {
  const $modal = d.getElementById('modal'),
    $form = d.getElementById('form'),
    $closeModal = d.getElementById('closeModal');
  
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  $form.addEventListener('submit', (e)=>{
    console.log($form.email.value)
    //console.log(regex.test($form.name.value))
    
    if(!regex.test($form.email.value)){
      e.preventDefault();
      $modal.classList.add('translate-y-0');
      $modal.classList.remove('-translate-y-full');
      return; 
    }
  });

  d.addEventListener('click', e=>{
    if(e.target === $closeModal){
      $modal.classList.remove('translate-y-0');
      $modal.classList.add('-translate-y-full');
    }
  })

}

export default formValidation;