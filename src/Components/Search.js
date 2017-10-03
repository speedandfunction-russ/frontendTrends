import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            allReports: [],
            request: [],
        };
    }

    static defaultProps = {
            dateOptions: [
            { value: '01.01.17', label: '01.01.17' },
            { value: '02.01.17', label: '02.01.17' },
            { value: '03.01.17', label: '03.01.17' },
            ], 
            techOptions: [
            { value: 'react', label: 'React' },
            { value: 'meteor', label: 'meteor' },
            { value: 'angular', label: 'angular' },
            ]
    };

    handleChange(event) {
        this.props.updateFilters({
            dates: this.getOptions()
        });
    }


    getOptions() {
        let options = this.refs.dates.selectedOptions || [];
        let arr = [];
        for (let i = 0; i < options.length; i++) {
            arr.push(options[i].value);
        }
        return arr;
        console.log(arr);
    }

    render() {
        let options = this.props.dateOptions.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        });
        return (
            <div className="Search">
                <form>
                <label>
                    Pick the time period:
                    <select ref="dates" defaultValue={this.props.dateOptions.map(option => option.value)} onChange={this.handleChange.bind(this)} multiple>
                        {options}
                    </select>
                </label>
                </form>
            </div>
        );
    }
}

export default Search;