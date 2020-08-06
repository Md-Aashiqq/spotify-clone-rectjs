import React from 'react'
import "../css/Body.css"
import Header from './Header'
import SongRow from "./SongRow"
import {useDataLayerValue } from "./DataLayer"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


function Body({spotify}) {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className='body'>
                <Header  spotify={spotify} />

            <div className='body__info'>
                    <img src={discover_weekly?.images[0].url} alt='' />
                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcz7oZ3nBAOdk8QmmUnXIDp5iV4dV1FORigyqdG-oaOQ&usqp=CAU&ec=45688575' alt='' /> */}
                    <div className='body__infoText'>
                            <strong>PLAYLIST</strong>
                            <h2>Discover Weely</h2>
                            <p>{discover_weekly?.description} </p>
                    </div>
            </div>

            <div className='body__songs'> 
                <div className='body__icons'>
                    <PlayCircleFilledIcon fontSize={'large'} className='icon__play'/>
                </div>

                    {discover_weekly?.tracks.items.map(item=>(
                        <SongRow track={item.track} />
                    ))}

            </div>

        </div>
    )
}

export default Body
