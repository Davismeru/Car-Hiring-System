const wrapper = document.querySelector('.wrapper')
// display all vehicles
const cardsContainer = wrapper.querySelector('.main-section')
vehicleData.map((data)=> {
    cardsContainer.innerHTML += `
    <div class="card">
        <div class="card-img">
            <img src=${data.imgSrc} alt="">
        </div>

        <div class="card-details">
            <h5>${data.brand}</h5>
            <p>${data.location}</p>
            <a href="#" class="expand-link">More details</a>
        </div>

        <!-- exapanded card to show more details -->
        <div class="expanded">
            <i class="fa-solid fa-x"></i>

            <div class="expanded-img">
                <img src=${data.imgSrc} alt="">
            </div>

            <div class="expanded-details">
                <P>Owner: <span>Davis Meru</span></P>
                <P>Residence: <span>Garissa</span></P>
                <P>Vehicle: <span>Toyota Nze</span></P>
                <P>Condition: <span>Perfect</span></P>
                
                <div class="ratings">
                    <section>
                        <i class="fa-solid fa-thumbs-up"></i>
                        <p>22</p>
                    </section>

                    <section>
                        <i class="fa-solid fa-thumbs-down"></i>
                        <p>3</p>
                    </section>
                </div>

                <P>Contacts: <span>+254717214046</span></P>
                <P>Email: <span>davismeru911@gmail.com</span></P>
            </div>   
        </div>
    </div>
    `
})

// see more details functionality
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    const expandLink = card.querySelector('.expand-link')
    const closeBtn = card.querySelector('.fa-x')
    const expandedCard = card.querySelector('.expanded')
    expandLink.addEventListener('click',(e)=> {
        e.preventDefault()
        expandedCard.classList.add('view-expanded')
    })

    closeBtn.addEventListener('click',(e)=> {
        expandedCard.classList.remove('view-expanded')
    })
})