import md5 from 'md5'

export default function GravatarDirective(){
    return {
        restrict : 'E',
        template: `<div>
          <img ng-src="http://www.gravatar.com/avatar/{{ctrl.mdEmail}}" />
          <strong ng-transclude></strong>
          </div>`,  
        bindToController: {
          email: '@'
        },
        transclude : true,
        controller: GravatarDirectiveController,
        controllerAs: 'ctrl'
    }
}

function GravatarDirectiveController(){
    this.mdEmail = md5(this.email);
}