import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

import Item from './Item'

function View(props) {
    //const [open, setOpen] = React.useState(true)

    return (
        <Modal

            onClose={props.onClose}
            onOpen={props.onOpen}
            open={props.open}
            size='small'
            style={{ Overflow: 'hidden' }}
        >
            <Header>
                <i className="close icon small" style={{float:"right"}} onClick={props.onClose}></i>
                <h3><strong>Review: </strong>{props.data.summary}</h3>
            </Header>
            <Modal.Content>

                <div className="ui relaxed divided list" >

                    <Item header="Id: " data={props.data.id} />
                    <Item header="Product Id: " data={props.data.productId} />
                    <Item header="Reviwer: " data={props.data.profileName} />
                    <Item header="Likes: " data={props.data.helpfulnessNumerator} />
                    <Item header="Dislikes: " data={props.data.helpfulnessDenominator} />
                    <Item header="Score: " data={props.data.score}/>
                    <Item header="Review: " />
                    <Item data={props.data.text} />




                </div>







            </Modal.Content>
            <Modal.Actions>

                <Button color='black'   inverted onClick={props.onClose}>
                         Close
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default View;

