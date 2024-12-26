let info = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      }
    ]

    let nameEle = document.querySelector(".name");
    let jobEle = document.querySelector(".role");
    let infoEle = document.querySelector(".info");
    let imgEle = document.querySelector(".img");

    let currentSlide = 0;
    

    function nextSlide(){
        
        currentSlide++;

        if (currentSlide > info.length-1) {
            currentSlide=0;
        }
        nameEle.innerHTML = info[currentSlide].name;
        jobEle.innerHTML = info[currentSlide].job;
        infoEle.innerHTML = info[currentSlide].text;
        imgEle.src = info[currentSlide].img;
    }

    

    function prevSlide(){
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide=info.length-1;
        }

        nameEle.innerHTML = info[currentSlide].name;
        jobEle.innerHTML = info[currentSlide].job;
        infoEle.innerHTML = info[currentSlide].text;
        imgEle.src = info[currentSlide].img; 
    }