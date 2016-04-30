import React from 'react'
import { List, ListItem, ListSubHeader, Button } from 'react-toolbox'

export default ({data}) =>
<List className="list" selectable>
  <ListSubHeader caption='Notifications' />
  {Array.prototype.map.call(data, (cur, index)=>
    <ListItem
      avatar={cur.amzn_thumb_url}
      caption={cur.amzn_title}
      legend={"Profit is at " + cur.profit + "%"}
    />
  )}
</List>


// <div>
//   {JSON.stringify(Array.prototype.map.call(data, (cur, index)=>{
//     return cur
//   }))}
// </div>
