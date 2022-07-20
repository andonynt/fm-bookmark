// const d = document,
//   $btns = d.querySelectorAll('.activeFAQ'),
//   $faqs = d.querySelectorAll('[data-question]');

// d.addEventListener('click', e => {
//   if(e.target.matches('.activeFAQ')){
//     const btnId = e.target.id;
    
//     $faqs.forEach($faq => {
//       if($faq.getAttribute('data-question') === btnId && !$faq.classList.contains('faq-active')){
//         $faq.classList.remove('faq-hidden');
//         $faq.classList.add('faq-active');
//       } else {
//         $faq.classList.add('faq-hidden');
//         $faq.classList.remove('faq-active');
//       }
//     });
//   }
// });

const d = document;

export default function faq (dataAnswer, dataImage) {
  const $dataAnswer = d.querySelectorAll(`[${dataAnswer}]`),
  $images = d.querySelectorAll(`[${dataImage}]`);

d.addEventListener('click', e => {
  
  if(e.target.matches('.question-btn') || e.target.matches('.question-btn > *')){
    let targetId ;
    e.target.id == '' ? targetId = e.target.parentElement.id : targetId = e.target.id;
    
    $images.forEach($image => {
      if($image.getAttribute(dataImage) == targetId && !$image.classList.contains('rotate-180')){
        $image.classList.add('rotate-180');
      } else {
        $image.classList.remove('rotate-180');
      }
    })

    $dataAnswer.forEach($answer => {
      if($answer.getAttribute(dataAnswer) === targetId && !$answer.classList.contains('block')){
        $answer.classList.remove('hidden');
        $answer.classList.add('block')
      } else {
        $answer.classList.add('hidden');
        $answer.classList.remove('block')
      }
    })

  }
});
}