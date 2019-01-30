
import React from 'react'
import MuiscIcon from "@material-ui/icons/MusicNote"
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    render() {
        const { data } = this.props
        const get_name_artists = (data) => {
            if (data && data.item) {
                console.log(data)
                const { item } = data
                return <span>
                    <a href={item.external_urls.spotify} target="_blank"> {item.name}</a> —— {
                        item.artists.lengths === 1 ? <a href={artist.external_urls.spotify} target="_blank">{artist.name}</a>
                            :
                            item.artists.map((artist, index) => {
                                if (index === (item.artists.length - 1)) {
                                    return <a href={artist.external_urls.spotify} target="_blank">{artist.name}</a>
                                } else {
                                    return <span><a href={artist.external_urls.spotify} target="_blank">{artist.name}</a> / </span>
                                }
                            })
                    }
                </span>

            }
        }

        return <div>
            {
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <MuiscIcon style={{ color: '#2196f3' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={get_name_artists(data)}
                            secondary={'Spotify'}
                        />
                    </ListItem>
                </div>
            }
        </div>
    }

}