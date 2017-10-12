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
                    { value: '2017-01-01T00:00:00.000Z', label: '2017-01-01' },
                    { value: '2017-01-02T00:00:00.000Z', label: '2017-01-02' },
                    { value: '2017-01-03T00:00:00.000Z', label: '2017-01-03' },
                ], 
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