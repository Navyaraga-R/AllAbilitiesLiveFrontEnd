import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomMultiCarousel from './UI/CustomMultiCarousel';
import Footer from "./Footer";

const Events = () => {
    const [liveChannels, setLiveChannels] = useState([]);
    const [liveEvents, setLiveEvents] = useState([]);

    useEffect(() => {
        getAllLiveChannels().then(result => {
            setLiveChannels(result);
        })
    }, [])

    // Get all live channels using JwPlayer api

    const getAllLiveChannels = () => {
        const url = 'https://api.jwplayer.com/v2/sites/3TrTO9d1/channels/';
        // console.log(category);
        const options = {
            method: 'GET',
            qs: { page: '1', page_length: '10' },
            headers: {
                Accept: 'application/json',
                Authorization: 'dQ-pCdfniYN89LsihnFD_WInTWpCVE56bFFSVEptZGtnd1dWVnZSbEZxVTB4Tk9WQlMn'
            }
        };
        return axios.get(url, options).then(response => {
            const channelsData = response.data.channels;
            return channelsData;
            // return channelsData.filter(channel => {
            //     return channel['metadata']['custom_params'] && channel['metadata']['custom_params']['category'] === category && channel['status'] !== 'idle';
            // });
        });
    }

    return (
        <div className="events-container">
            <h4>Live Events</h4>
            <CustomMultiCarousel videosData={liveChannels} />
        </div>
    )
}

export default Events;