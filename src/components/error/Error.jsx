import React, {Component} from 'react';

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        const {hasError} = this.state;
        if (hasError) return <div>опять все поломалось</div>;

        return (
            <div className='error'>
                {this.props.children}
            </div>
        );
    }
}