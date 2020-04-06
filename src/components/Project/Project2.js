import React, { Component } from 'react';
import axios from 'axios';
import LeftTable from './LeftTable'
import RightTable from './RightTable'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import TablePagination from "@material-ui/core/TablePagination";
import "./Project2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Project2 extends Component {
    
    
    constructor (){
        super()
        this.state = {
            resourceData: null,
            rightResource: null,
            checkbox1: false,
            showDropdown: false,

            page: 0,
            rowsPerPage: 10,

            pageRight:0,
            rowsPerPageRight: 10

        }
        this.selectedCheckbox = [];
        this.selectedCheckboxRight = [];
        // this.addCheckboxToList = this.addCheckboxToList.bind(this)
    }
    
    
    

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        // const 
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({ resourceData: response.data })
                console.log(this.state.resourceData, "ResourceData");
                // define a list ,the length equals datasource's length, and set false
                for (var l = 1; l<=Object.keys(response.data).length;l++){
                    this.selectedCheckbox[l]=false;
                    this.selectedCheckboxRight[l] =false;
                }
                // console.log(this.selectedCheckbox,"selectedCheckBox");
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            });   
        
    }

    //control the show up of dropdown
    optionHandler = (event)=> {
        this.setState({ showDropdown: !this.state.showDropdown })
    }




    //check if the checkbos checked, and 
    checkboxHandler = (event)=>{
        // this.selectedCheckbox[checkboxId] = !this.selectedCheckbox[checkboxId];
        // console.log(event.target.checked, 'sdanchsvadagojf');
        // console.log(event.target.id, "ididididididid")
        var checkboxId = event.target.id.split("-");
        this.selectedCheckbox[checkboxId[2]] = event.target.checked
        // console.log(this.selectedCheckbox, 'checkboxHandler')

        // console.log(checkboxId,"checkbox has been toggle");
    }

    checkboxRightHandler = (event)=> {
        var checkboxId = event.target.id.split("-")
        this.selectedCheckboxRight[checkboxId[2]] = event.target.checked
    }

    // select all rows
    selectAllHandler = (event) => {
            
        for (var l = 1; l <= this.state.rowsPerPage; l++) {
            this.selectedCheckbox[l + this.state.page * this.state.rowsPerPage] = true;
            document.getElementById("left-table-" + (l + this.state.page * this.state.rowsPerPage)).checked = true
        }
        this.setState({showDropdown: false})
    }
    
    // cancel all selected
    cancelAllHandler = (event) => {
        for (var l = 1; l <= this.state.rowsPerPage; l++) {
            this.selectedCheckbox[l + this.state.page * this.state.rowsPerPage] = false;
            document.getElementById("left-table-" + (l + this.state.page * this.state.rowsPerPage) ).checked = false
            // console.log(document.getElementById(l).checked, "adkfahfaofaoaunadc")
        }
        this.setState({ showDropdown: false })
    }

    addToRightHandler = ()=> {
        let selectedLeftData = this.state.resourceData.filter(
            (row) => {
                return this.selectedCheckbox[row.id]
            }
        )
        let addToRightData;
        if (this.state.rightResource)
            addToRightData = this.unionOfTwoResource(selectedLeftData, this.state.rightResource, this.idComparator);
        else
            addToRightData = selectedLeftData;

        console.log(addToRightData,"this is unionnnnnnnnnnnn")
        // console.log(this.selectedCheckbox,"addToRightHandler/selectedcheckbox")
        // console.log(addToRightData, "addToRightHandler ")
        this.setState({rightResource: addToRightData})
        this.cancelAllHandler()
        console.log("addto Right handle")
    }

    //this is a helper function which is used to combind two reasources.
    unionOfTwoResource = (arr1,arr2,idComparator) =>{
        let union = arr1.concat(arr2)
        for (var i = 0; i < union.length; i++ ){
            for (var j = i+1; j<union.length;j++){
                if (idComparator(union[i],union[j]))
                {
                    union.splice(j,1);
                    j--;
                }
            }
        }
        return union;
    }

    //this is a helper function
    idComparator= (o1,o2)=>{
        return o1.id === o2.id
    }
    
    rightTrashHandler = () => {
        // if(this.state.rightResource){
            let noToTrashData = this.state.rightResource.filter(
                (row) => {
                    return !this.selectedCheckboxRight[row.id]
                }
            )

            console.log(this.selectedCheckboxRight,"nototrash")
            // console.log()
            this.setState({ rightResource: noToTrashData })
            this.cancelRightAllHandler()
        // }

        
    }


    cancelRightAllHandler = (event) => {
        var objs = document.getElementById('right-table')
        for (var i = 0; i < objs.length; i++) {
            objs[i].checked = false
        }
    }


    

    pageChangeHandler = (event, newPage) => {
        this.setState({page: newPage})
    }

    rowsPerPageChangeHandler = (event) => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10)})
        this.setState({page: 0})
    }
    
    pageChangeRightHandler = (event, newPage) => {
        this.setState({ pageRight: newPage })
    }

    rowsPerPageChangeRightHandler = (event) => {
        this.setState({ rowsPerPageRight: parseInt(event.target.value, 10) })
        this.setState({ pageRight: 0 })
    }

    render() {
    
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
        
        const rightDatas = []
        var resource = { ...this.state.rightResource }
        // console.log(this.state.Resource)
        if (resource) {
            for (let key in resource) {
                rightDatas.push({ ...resource[key] })
                // datas[key].features = []
                // console.log(datas[key], 'KEYS======')
            }
        }

        
        return (
            <div>

                    <div align="right" style={{ marginTop: "5px", marginRight: "80px" }}>
                        <select
                            // value={this.state.options}
                            // onChange={this.handleChangeValue}
                            style={{
                                width: "200px",
                                height: "40px",
                                outline: "none",
                                marginRight: "10px",
                                marginBottom:"10px",
                                marginTop:"10px",
                                display:"inline"
                            }}
                        >
                            
                            {/* {options.map(val => ( */}
                                <option >
                                    Project1
                                </option>
                            // ))}
                        </select>
                    </div>
                    <div className="Tables">
                        <LeftTable
                            header={"Resource catalog"} showDropdown={'true'} data={datas} titles={titles}
                            page={this.state.page}
                            rowsPerPage={this.state.rowsPerPage}
                            checkboxHandler={() => this.checkboxHandler}
                            optionHandler={this.optionHandler}
                            showDropdown={this.state.showDropdown}
                            addToRightHandler={() => this.addToRightHandler}
                            selectAllHandler = {() => this.selectAllHandler}
                            selectedCheckbox={this.selectedCheckbox}
                            cancelAllHandler={()=> this.cancelAllHandler} 
                            pageChangeHandler={() => this.pageChangeHandler}
                            rowsPerPageChangeHandler={() => this.rowsPerPageChangeHandler}
                            >
                        </LeftTable>
                        <div id="right-table" className="Table">
                            <RightTable
                                header={"Project"} showDropdown={'true'} data={rightDatas} titles={titles}
                                checkboxRightHandler={() => this.checkboxRightHandler}
                            
                                rowsPerPageRight={this.state.rowsPerPageRight}
                                pageRight={this.state.pageRight}
                                // optionHandler={this.optionHandler}
                                showDropdown={this.state.showDropdown}
                                selectedCheckboxRight={this.selectedCheckboxRight}
                                rightTrashHandler={() => this.rightTrashHandler}
                      
                                pageChangeRightHandler={() => this.pageChangeRightHandler}
                                rowsPerPageChangeRightHandler={() => this.rowsPerPageChangeRightHandler}
                                >
                            </RightTable>
                        </div>
                    </div>
                    <div className="Bottom">
                        <div  type="button" className="SubmitButton" >
                            <FontAwesomeIcon color="white" icon="check" /> &nbsp;
                            submit
                        </div>
                    </div>
                
            </div>
        );
    }
}

export default Project2;
