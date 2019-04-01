(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"config-file-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Config File Description")]),t._v(" "),s("p",[t._v("Imunify360 config file is available on the following location after installation:")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("em",[t._v("/etc/sysconfig/imunify360/imunify360.config")])])]),t._v(" "),s("p",[t._v("In the config file it is possible to set up Imunify360 configuration. The following options are available:")]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("AUTO_WHITELIST:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("timeout: 1440")])]),s("td",[t._v("# set in minutes how long to keep automatically whitelisted IP")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("after_unblock_timeout: 1440")])]),s("td",[t._v("\n# set in minutes for how long IP will be added to the "),s("span",{staticClass:"notranslate"},[t._v("White List")]),t._v(" after it passes Imunify360 CAPTCHA")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("DOS:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("enabled: false")])]),s("td",[t._v("# allows to enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") DOS detection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("interval: 30")])]),s("td",[t._v("# interval in seconds between DoS detection system activation")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_limit: 250")])]),s("td",[t._v("# maximum default limit of connections from remote IP to local port before DoS protection will be triggered. Cannot be set lower than 100")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("port_limits:")])]),s("td",[t._v("# allows to set limits per local port")])]),t._v(" "),s("tr",[s("td",[t._v("80: 150\n")]),s("td",[t._v("# limit on port 80 is set to 150 connections")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("INCIDENT_LOGGING:")])])]),t._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[t._v("min_log_level: 4")])]),s("td",[t._v("# minimum severity level for incidents displayed in UI. Please find the levels description "),s("a",{attrs:{href:"/dashboard/#incidents-logging"}},[t._v("here")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("num_days: 100")])]),s("td",[t._v("# incidents older than "),s("span",{staticClass:"notranslate"},[s("em",[t._v("num_days")])]),t._v(" are automatically deleted")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("limit: 100000")])]),s("td",[t._v("# how many incidents should be stored in Imunify360 log file")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("ui_autorefresh_timeout: 10")])]),s("td",[t._v("# set auto refresh time for incidents in user interface")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MOD_SEC_BLOCK_BY_SEVERITY:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: true")])]),s("td",[t._v("# allows to enable or disable option that moves IPs to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")]),t._v(" if the ModSecurity rule is triggered")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_incidents: 2")])]),s("td",[t._v("# set a number of repeats of the ModSecurity incident from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("denied_num_limit: 2")])]),t._v(" "),s("td",[t._v("# set a number of repeats of the ModSecurity incidents that got Access Denied error from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("check_period: 120")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which incident from the same IP will be recorded as a repeat")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("severity_limit: 2")])]),t._v(" "),s("td",[t._v("# set a level of severity for DOS detection sensitivity. "),s("a",{attrs:{href:"/dashboard/#settings"}},[t._v("Read more")]),t._v(" about severity levels")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MOD_SEC_BLOCK_BY_CUSTOM_RULE:")])]),s("th",{attrs:{align:"left"}},[t._v("# this section allows to add custom configuration for blocking by ModSecurity incidents")])]),t._v(" "),s("tr",[s("td",[t._v("33332:")]),t._v(" "),s("td",[t._v("# set ModSecurity rule ID")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("check_period: 120")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which incident from the same IP will be recorded as a repeat")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_incidents: 10")])]),t._v(" "),s("td",[t._v("# set a number of repeats of the ModSecurity incident from the same IP for adding it to "),s("span",{staticClass:"notranslate"},[t._v("Gray List")])])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("MALWARE_SCANNING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("try_restore_from_backup_first: false")])]),t._v(" "),s("td",[t._v("# allows to enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") automatic malicious file restore from backup if a clean copy exists,\notherwise "),s("span",{staticClass:"notranslate"},[s("em",[t._v("default_action")])]),t._v(" is applied")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_action: quarantine")])]),t._v(" "),s("td",[t._v("# default action on malicious file detected."),s("br"),t._v("\nAvailable options:\n"),s("ul",[s("li",[s("span",{staticClass:"notranslate"},[t._v("quarantine")]),t._v(" – do not delete and move to quarantine")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[t._v("notify")]),t._v(" – do not delete and send email notification")]),t._v(" "),s("li",[s("span",{staticClass:"notranslate"},[t._v("delete")]),t._v(" – delete malicious file")])])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_inotify: false")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") real-time scanning for modified files using "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inotify",target:"_blank"}},[t._v("inotify")]),t._v(" library")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_pure_ftpd: true")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") real-time scanning for files uploaded through PureFTPd")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable_scan_modsec: true")])]),t._v(" "),s("td",[t._v("#  enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") real-time scanning of all the files\nthat were uploaded via http/https. Note that it requires "),s("a",{attrs:{href:"https://modsecurity.org",target:"_blank"}},[t._v("ModSecurity")]),t._v(" to be installed")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("CAPTCHA:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cert_refresh_timeout: 3600")])]),t._v(" "),s("td",[t._v("# set in seconds how often SSL certificate will be refreshed")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("ERROR_REPORTING:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: true")])]),t._v(" "),s("td",[t._v("# automatically report errors to imunify360 team")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("SEND_ADDITIONAL_DATA:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enable: true")])]),t._v(" "),s("td",[t._v("# send anonymized data from query string/post parameters and cookies.")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("NETWORK_INTERFACE:")])]),t._v(" "),s("th",{attrs:{aligh:"left"}},[t._v("# manages for what network interfaces Imunify360 rules will be applied")])]),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth_device: null")])]),t._v(" "),s("td",[t._v("# by default, Imunify360 will auto-configure iptables to filter all traffic. \nIf you want iptables rules to be applied to a specific NIC only, list them here (e.g. "),s("span",{staticClass:"notranslate"},[t._v("eth1")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth6_device: null")])]),t._v(" "),s("td",[t._v("# it is the same as "),s("span",{staticClass:"notranslate"},[s("em",[t._v("eth_device")])]),t._v(", but configures ip6tables to use specific device")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("eth_device_skip: []")])]),t._v(" "),s("td",[t._v("# if you don't want iptables\\ip6tables rules to be applied to specific NICs, list them here (e.g "),s("span",{staticClass:"notranslate"},[t._v("[eth1, eth2]")]),t._v(")")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("BACKUP_RESTORE:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_days_in_backup: 90")])]),t._v(" "),s("td",[t._v("# restore from backup files that are not older than "),s("span",{staticClass:"notranslate"},[s("em",[t._v("max_days_in_backup")])])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("cl_backup_allowed: true")])]),t._v(" "),s("td",[t._v("# show "),s("span",{staticClass:"notranslate"},[t._v("CloudLinux Backup")]),t._v(" in the list of available backup system ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or hide it ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(")")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("CAPTCHA_DOS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("enabled: true")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false")]),t._v(") CAPTCHA Dos protection")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("time_frame: 21600")])]),t._v(" "),s("td",[t._v("# set a period in seconds during which requests to CAPTCHA from the same IP\nwill be recorded as repeated")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("max_count: 100")])]),t._v(" "),s("td",[t._v("# set the maximum number of repeated CAPTCHA requests after which IP is moved\nto the CAPTCHA Dos list without an ability to request CAPTCHA again")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("timeout: 864000")])]),t._v(" "),s("td",[t._v("# set in seconds the time on which to add the IP in CAPTCHA Dos list without an ability\nto request CAPTCHA again")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("BLOCKED_PORTS:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("default_mode: allowed")])]),t._v(" "),s("td",[t._v("# defines the default state of ports which is not explicitly set by user ("),s("span",{staticClass:"notranslate"},[s("em",[t._v("denied")])]),t._v(" by default or "),s("span",{staticClass:"notranslate"},[s("em",[t._v("allowed")])]),t._v(" by default). Currently only "),s("span",{staticClass:"notranslate"},[s("em",[t._v("allowed")])]),t._v(" is supported")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("WEBSHIELD:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("known_proxies_support: true")])]),t._v(" "),s("td",[t._v("# enable CDN support, treat IPs behind CDN as any other IPs")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[t._v("PROACTIVE_DEFENСE:")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("blamer: false")])]),t._v(" "),s("td",[t._v("# enable ("),s("span",{staticClass:"notranslate"},[t._v("true")]),t._v(") or disable ("),s("span",{staticClass:"notranslate"},[t._v("false) Blamer")])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[t._v("mode: KILL")])]),t._v(" "),s("td",[t._v("# available modes:"),s("ul",[s("li",[s("span",{staticClass:"notranslate"},[t._v("KILL")])]),s("li",[s("span",{staticClass:"notranslate"},[t._v("DISABLED")])]),s("li",[s("span",{staticClass:"notranslate"},[t._v("LOG")])])])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Experimental - "),s("span",{staticClass:"notranslate"},[t._v("Active Response")]),t._v(" feature")]),t._v(" "),s("p",[t._v("The following feature requires a special Imunify360 build - contact our tech support at "),s("span",{staticClass:"notranslate"},[t._v("https://cloudlinux.zendesk.com (Imunify360")]),t._v(" department) to enable it.")])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v("Active Response")]),t._v(" is an ossec-driven (IDS) feature of Imunify360 which has been re-engineered to make it capable of blocking access to a specific server port being attacked.")]),t._v(" "),s("p",[t._v("The purpose of the feature is significantly reducing false positive rate while increasing its capabilities to detect and block aggressive brute force requests.")]),t._v(" "),s("p",[t._v("In order to activate "),s("span",{staticClass:"notranslate"},[t._v("Active Response, ")]),t._v("the following lines should be added into "),s("span",{staticClass:"notranslate"},[s("em",[t._v("/etc/sysconfig/imunify360/imunify360.config")])]),t._v(":\n")]),s("div",{staticClass:"notranslate"},[s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("OSSEC:\n  active_response: true\n")])])])]),t._v("\nand then restart Imunify360 service:\n"),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart imunify360\n")])])])])])}],!1,null,null,null);a.default=n.exports}}]);