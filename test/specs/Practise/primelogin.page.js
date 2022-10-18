

const PrimePage = require('./primepage');

class primesignin extends PrimePage{

    get profileicon () {
        return $('#pv-nav-account-icon');
    }

    get signinbtn () {
        return $('#Sign In');
    }

    get userid () {
        return $('#ap_email');
    }

    get userpwd () {
        return $('#ap_password');
    }

    get signinsubmitbtn () {
        return $('#signInSubmit');
    }

    async signin (username, password) {
        await this.profileicon.click();
        await this.signinbtn.click();
        await this.userid.setValue(username);
        await this.userpwd.setValue(password);
        await this.signinsubmitbtn.click();
    }

    open () {
        return super.open('signin');
    }
}

    module.exports = new primesignin();
