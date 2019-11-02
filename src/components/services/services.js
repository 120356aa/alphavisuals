import React from 'react';
import { ServicesWrap } from './servicesStyles';

function Services () {
    return (
        <ServicesWrap>
            <div className="service">
                <div className="service_content">
                    <h1>Car Photos</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Up to 15 edited photos of your vehicle.</p>
                    <p className="location"><span>Locations: </span> One location</p>
                    <p className="price" ><span>Price: </span> $50</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>

            <div className="service">
                <div className="service_content">
                    <h1>Rolling Shots</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Three to six photos of up to 2 vehicle.</p>
                    <p className="location"><span>Locations: </span> One location</p>
                    <p className="price" ><span>Price: </span> $80</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>

            <div className="service">
                <div className="service_content">
                    <h1>Couples Shoot</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Up to 25 couples photos.</p>
                    <p className="location"><span>Locations: </span> Up to two location</p>
                    <p className="price" ><span>Price: </span> $100</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>

            <div className="service">
                <div className="service_content">
                    <h1>Engagement Shoot</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Up to 30 engagement photos.</p>
                    <p className="location"><span>Locations: </span> Up to two location</p>
                    <p className="price" ><span>Price: </span> $150</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>

            <div className="service">
                <div className="service_content">
                    <h1>RDM Mini Shoot</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Up to 10 photos of your vehicle.</p>
                    <p className="location"><span>Locations: </span> Single nearby location</p>
                    <p className="price" ><span>Price: </span> $30</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>

            
            <div className="service">
                <div className="service_content">
                    <h1>Car Profile</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Up to 15 photos of your vehicle.</p>
                    <p className="location"><span>Locations: </span> Professionally chosen  location</p>
                    <p className="price" ><span>Price: </span> $100</p>
                </div>
                <div className="service_cta">
                    <button>Set Appointment</button>
                </div>
            </div>
        </ServicesWrap>
    )
}

export default Services;