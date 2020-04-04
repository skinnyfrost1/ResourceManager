import React, { Component } from 'react';
import axios from 'axios';
import LeftTable from './LeftTable'

class Project2 extends Component {
    
    
    constructor (){
        super()
        this.state = {
            resourceData: null,
            rightResource: [],
            checkbox1: false

        }
        this.selectedCheckbox = {};
        // this.addCheckboxToList = this.addCheckboxToList.bind(this)
    }
    
    addCheckboxToList = (checkBoxId)=>{
        console.log(checkBoxId,"wo shini baba")
        this.selectedCheckbox[checkBoxId]=false;
        console.log(this.selectedCheckbox, "this is selectedCheckbox   iasdjflajdflkajdfksjf");
    }
    

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        // const 
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({ resourceData: response.data })
                console.log(this.state.resourceData, "ResourceData")
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            });
            

        
    }
    checkbox1Handle = ()=>{
        this.setState({checkbox1:!this.state.checkbox1});
    }
    
    // importHandler = ()=>{
        // this.state.resourceData.filter((elem,index) =>{
            // filt
        // })
    //     document.getElementById("checkbox"+id)
    // }
    // selectProjectHandeler = (event) => {
    //     this.setState({RightResource : []})
    //     const val = Number(event.target.value)
    //     axios.get
    // }

    // checkboxAddHandler = (event)=> {
    //     const leftResourceIdList = [...this.state.leftResourceIdList]
    //     this.setState({leftResourceIdList: leftResourceIdList})
    // }

    // checkboxDeleteHandler = (event)

    // addToRightHandler = (event)=> {
    //     const list = []
    //     if(this.state.Resource) {
    //         for (let key in this.state.Resource.data) {
    //             if (this.state.leftResourceIdList.includes(this.state.Resource.data[key].resource.id)
    //                 && !list.includes(this.state.Resource.data[key])) {
    //                 list.push(this.state.Resource.data[key])
    //             }
    //         }
    //     }
    //     this.setState({ RightResource: list })
    //     this.cancelLeftAllHandler()
    //     this.cancelRightAllHandler()
    // }
    render() {
        // const data = this.state.resourceData
        // console.log(data,"1111111")
        // var data = {}
        // const titles =[]
        // const rows = []
        // const colunmns =[]
        // if(this.state.resourceData) {
        //     for(var i in this.state.resourceData[0]) {
        //         titles.push(i)
        //         console.log(titles, "this is titles")
        //         colunmns.push({ title: i, field: i})
        //     }


        // }
        const datas = []
        var resource = { ...this.state.resourceData }
        // console.log(this.state.Resource)
        if (resource) {
            for (let key in resource) {
                datas.push({ ...resource[key] })
                // datas[key].features = []
                // console.log(datas[key], 'KEYS======')
            }
        }
        
        
        const titles = ['userId', 'title']
        



        
        return (
            <div>
                <LeftTable addCheckboxToList={(checkboxId) => this.addCheckboxToList()} header={"Resource catalog"} showDropdown={'true'} data={datas} titles={titles}></LeftTable>
            </div>
        );
    }
}

export default Project2;
