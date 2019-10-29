import React from 'react';

const Ratings = (rate) => {
    switch(rate){
        case 1:
            return <div className="start-covers">
                    <ul>
                        <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                        <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                        <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                        <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                        <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                    </ul>
                </div>
        case 1:
            return <div className="start-covers">
                      <ul>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                      </ul>
                   </div>
        case 2:
            return <div className="start-covers">
                      <ul>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                      </ul>
                   </div>
        case 3: 
            return <div className="start-covers">
                      <ul>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                      </ul>
                   </div>
        case 4: 
            return <div className="start-covers">
                      <ul>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="un-colored-stars"><i class="fas fa-star"></i></li>
                      </ul>
                   </div>
        case 5: 
            return <div className="start-covers">
                      <ul>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                          <li className="colored-stars"><i class="fas fa-star"></i></li>
                      </ul>
                   </div>
    }
}












