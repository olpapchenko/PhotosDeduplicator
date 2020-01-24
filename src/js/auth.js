let accessToken;
class Auth {
    static function authenticate(onAuthSuccess) {
        if(accessToken != null) {

        }
        chrome.identity.getAuthToken({interactive: true}, function(token) {
            token=accessToken;
            onAuthSuccess.apply(this, token);
        });
    }

    static function logout() {

    }
}


export default authenticate;