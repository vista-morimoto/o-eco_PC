//<![CDATA[

new TWTR.Widget({
version: 2,type: 'profile',rpp: 5,interval: 9000,
width: 'auto',height: 95,
theme: {
shell: {
background: 'transparent',
color: '#ffffff'
},
tweets: {
background: 'transparent',
color: '#333333',
links: '#ff6600'
}
},
features: {
scrollbar: false,
loop: true,
live: true,
hashtags: true,
timestamp: true,
avatars: false,
behavior: 'false'
}
}).render().setUser('oca_eco').start();

//]]>