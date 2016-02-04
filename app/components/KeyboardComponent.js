const KeyboardComponent = {
    controller : function($rootScope) {
        this.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');;
        this.keyPush = function(id){
            $rootScope.$emit('hangMan::KeyboardComponent', id);
        }
    },
    bindings : {
        model : '=',
    },
    template: `<div class="keyboard">
    <kdb ng-repeat="letter in $ctrl.letters track by $index">
    <a ng-click="$ctrl.keyPush(letter)" class="badge">{{letter|uppercase}}</a>
    </kdb>
    </div>`
}
export default KeyboardComponent