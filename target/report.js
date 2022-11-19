$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/tv.feature");
formatter.feature({
  "name": "Tvpurchase",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tv purchase",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user search required tv",
  "keyword": "When "
});
formatter.match({
  "location": "tvpurchase.user_search_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tv purchase",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user search required tv by using oneD list",
  "rows": [
    {
      "cells": [
        "REALMETV",
        "SONYTV",
        "SAMSUNGTV",
        "REDMITV",
        "LGTV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "tvpurchase.user_search_required_tv_by_using_oneD_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tv purchase",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user search required tv by using oneD map",
  "rows": [
    {
      "cells": [
        "TV1",
        "SONYTV"
      ]
    },
    {
      "cells": [
        "TV2",
        "REALMETV"
      ]
    },
    {
      "cells": [
        "TV3",
        "LGTV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "tvpurchase.user_search_required_tv_by_using_oneD_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "mobile purchase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user search required mobile \"\u003cTV\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TV"
      ]
    },
    {
      "cells": [
        "REALMETV"
      ]
    },
    {
      "cells": [
        "SAMSUNGTV"
      ]
    },
    {
      "cells": [
        "LGTV"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile purchase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user search required mobile \"REALMETV\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobilepuchasestep.user_search_required_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile purchase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user search required mobile \"SAMSUNGTV\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobilepuchasestep.user_search_required_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login into flipkarttv",
  "keyword": "Given "
});
formatter.match({
  "location": "tvpurchase.user_login_into_flipkarttv()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile purchase",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user search required mobile \"LGTV\"",
  "keyword": "When "
});
formatter.match({
  "location": "mobilepuchasestep.user_search_required_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select required  tv",
  "keyword": "And "
});
formatter.match({
  "location": "tvpurchase.user_select_required_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select payment method in UPI",
  "keyword": "And "
});
formatter.match({
  "location": "mobilepuchasestep.user_select_payment_method_in_UPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user got the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "mobilepuchasestep.user_got_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});