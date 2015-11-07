controllers.controller('MainController',

  function() {
    var vm = this;
    vm.status = "Main Controller working"

    vm.show = show;
    vm.getField = getField;
    vm.save = save;
    vm.remove = remove;
    vm.update = update;



    function show(page) {
      if(page==='about'){
        vm.showAbout=true;
        vm.showHome=false;
      }else if (page==='home') {
        vm.showAbout=false;
        vm.showHome=true;
      }
        }

    function getField() {
      solrServices.getField().then(function(result) {
        vm.solrFieldList = result;
      });
    };

    function save() {
      var fieldBoostObj = {
        "name": vm.fieldList,
        "boost": vm.boost,
        "active": true,
        "owner": "praveen",
        "createdBy": "praveen",
        "updatedBy": "praveen"
      };
      //if update, pass id with save functionality
      if (vm.updateFlag) {
        fieldBoostObj.id = vm.id;
        vm.updateFlag = false;
      }
      fieldRuleServices.save(fieldBoostObj).then(function(result) {
        $rootScope.$broadcast('fieldRulesChanged');
        clearFields();
      });
    };

    function remove(id) {
      fieldRuleServices.remove(id).then(function(result) {
        $rootScope.$broadcast('fieldRulesChanged');
      });
    };

    function update(rule) {
      vm.updateFlag = true;
      vm.id = rule.id;
      vm.fieldList = rule.name;
      vm.boost = rule.boost;
    };

    function clearFields() {
      vm.fieldList = "";
      vm.boost = "";
    }
  }
);
