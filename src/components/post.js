import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import InstagramEmbed from 'react-instagram-embed';
import Classes from './../styles/post.module.css'

export default function Post() {
    return (
        <div className={Classes.post}>
            <div className={Classes.twitter}>
                <h1>Twitter Post</h1>
                <Timeline
                    dataSource={{
                    sourceType: 'https://twitter.com/_knowweb',
                    screenName: '_knowweb'
                    }}
                    options={{
                    username: '_knowweb',
                    height: '470'
                    }}
                />
            </div>
            <div className={Classes.instagram}>
                <h1>Instagram Post</h1>
                <InstagramEmbed
                    url='https://www.instagram.com/p/B0ciiqJAAtM/?utm_source=ig_web_copy_link'
                    maxWidth={420}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                />
            </div>

        </div>
    )
}
