import React from 'react';

interface UserClassProps {
    name: string;
    location: string;
}

interface UserClassState {
    userInfo: {
        name:String
        location:String
    };
}

class UserClass extends React.Component<UserClassProps, UserClassState> {
    constructor(props: UserClassProps) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                location: ''
            }
        };
    }

    async componentDidMount() : Promise<void> {
        const data = await fetch('https://api.github.com/users/prasad-chandera')
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(): void {
        console.log('Component Did Update::')
    }
    
    componentWillUnmount(): void {
        console.log('Component Will Unmount::')
        
    }

    render() {
        // const { name, location } = this.props;
        const {name,location} = this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
            </div>
        );
    }
}

export default UserClass;