import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {getCustomer, saveCustomer} from "../services/customerService";

class CustomerForm extends Form {
    state = {
        data: {
            name: "",
            phone: ""
        },
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string()
            .required()
            .label("Name"),
        phone: Joi.string()
            .required()
            .label("Phone")
    };

    async populateCustomers() {
        try {
            const customerId = this.props.match.params.id;
            if (customerId === "new") return;

            const {data: customer} = await getCustomer(customerId);
            this.setState({data: this.mapToViewModel(customer)});
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404)
                this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {
        await  this.populateCustomers();
    }

    mapToViewModel(customer) {
        return {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        
        };
    }

    doSubmit = async () => {
        await saveCustomer(this.state.data);

        this.props.history.push("/customers");
    };

    render() {
        return (
            <div>
                <h1>Customer Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("phone", "Phone", "number")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default CustomerForm;
