const sliderCOntainer = document.querySelector( ".slider-container" )
const imgArr = [ "assets/imgs/01.webp", "assets/imgs/02.jpeg", "assets/imgs/03.jpeg", "assets/imgs/04.jpeg", "assets/imgs/01.webp", "assets/imgs/02.jpeg", "assets/imgs/03.jpeg", "assets/imgs/04.jpeg" ]
let slidesCount = imgArr.length;
let currentSlide = 1;
( function ( global )
{
    const dark = ( function ()
    {
        if ( !slidesCount )
        {
            alert( "you must add img to slider" )
            throw "you must add img to slider"
        }
        //ui  creation function
        const createUi = ( function ()
        {
            imgArr.forEach( ( e ) =>
            {
                let img = document.createElement( "img" )
                img.src = e
                sliderCOntainer.appendChild( img )
            } )
            let imgss = Array.from( sliderCOntainer.children )
            var nextButton = document.getElementById( 'next' );
            var prevButton = document.getElementById( 'prev' );
            const paginationList = document.getElementById( 'indicators' );
            for ( var i = 1; i <= slidesCount; i++ )
            {
                var paginationItem = document.createElement( 'li' );
                paginationItem.setAttribute( 'data-index', i );
                paginationItem.appendChild( document.createTextNode( i ) );
                paginationList.appendChild( paginationItem );
            }
            const paginationCreatedUl = Array.from( paginationList.children )
            nextButton.addEventListener( "click", nextSlide )
            prevButton.addEventListener( "click", prevSlide )
            paginationCreatedUl.forEach( ele =>
            {
                ele.addEventListener( "click", function ()
                {
                    currentSlide = parseInt( this.getAttribute( 'data-index' ) );
                    theChecker();
                } )
            } )
            theChecker();
            function nextSlide()
            {
                if ( !nextButton.classList.contains( 'disabled' ) )
                {
                    currentSlide++;
                    theChecker();
                }
            }
            function prevSlide()
            {
                if ( !prevButton.classList.contains( 'disabled' ) )
                {
                    currentSlide--;
                    theChecker();
                }
            }
            function theChecker()
            {
                removeAllActive();
                imgss[ currentSlide - 1 ].classList.add( 'active' );
                paginationCreatedUl[ currentSlide - 1 ].classList.add( 'active' );
                if ( currentSlide == 1 )
                {
                    prevButton.classList.add( 'disabled' );
                } else
                {
                    prevButton.classList.remove( 'disabled' );
                }
                if ( currentSlide == slidesCount )
                {
                    nextButton.classList.add( 'disabled' );
                } else
                {
                    nextButton.classList.remove( 'disabled' );
                }
            }
            function removeAllActive()
            {
                imgss.forEach( function ( img )
                {
                    img.classList.remove( 'active' );
                } );
                paginationCreatedUl.forEach( function ( li )
                {
                    li.classList.remove( 'active' );
                } );
            }
        } )()
        return {
            version: "0.0.1",
            createUi
        }
    } )()
    if ( !global.dark )
    {
        global.dark = global.rag = dark;
    }

} )( window, slidesCount )

