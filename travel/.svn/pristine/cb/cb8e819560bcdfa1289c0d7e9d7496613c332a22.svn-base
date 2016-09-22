$(function() {
    var ns = {};
    ns.check = {
        empty: function(data, info) {
            var regrex = /.+/;
            if (regrex.test(data)) {
                return false;
            }
            if (info !== undefined) {
                ns.tip(info);
            }
            return true;
        },
        tel: function(data, info) {
            var regrex = /^1[0-9]{10}$/
            info = info || "请输入正确的手机号码！";
            if (!regrex.test(data)) {
                ns.tip(info);
                return false;
            }
            return true;
        },
        name: function(data, info) {
            var regrex = /^[\u4e00-\u9fa5a-zA-Z]+$/;
            info = info || "请输入正确的姓名！";
            if (!regrex.test(data)) {
                ns.tip(info);
                return false;
            }
            return true;
        },
        pwd: function(data1, data2, info) {
            info = info || "请确认两次密码输入一致并不为空！";
            if (!/.+/.test(data1) || data1 != data2) {
                ns.tip(info);
                return false;
            }
            return true;
        },
        num: function(data, info) {
            if (/.+/.test(data) || isNaN(data)) {
                if (info) {
                    ns.tip(info);
                }
                return false;
            }
            return true;
        },
        int: function(data, info) {
            var regrex = /^\d+$/;
            if (!regrex.test(data)) {
                if (info) {
                    ns.tip(info);
                }
                return false;
            }
            return true;
        },
        len: function(data,length) {
            if ( data.length != length ){
                return false;
            }
            return true;
        },
        idcard : function ( data , info ){
            var regrex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            info = info ? info : "请输入正确的身份证号！";
            if (!regrex.test(data)){
                ns.tip(info);
            }
            return regrex.test(data);
        },
        email : function ( data , info ){
            var regrex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            info = info ? info : "请输入正确的email地址！";
            if (!regrex.test(data)){
                ns.tip(info);
            }
            return regrex.test(data);
        },
        lenRange: function(data,minlength,maxlength){
            var len = data.length;
            if ( len < minlength ){
                return false;
            }
            if ( maxlength !== undefined ){
                if ( len > maxlength ){
                    return false;
                }
            }
            return true;
        }
    };
 
    ns.tip = function(txt) {
        
    };
    ns.tpl = window.template;  
    window.ns = ns;
    var users = {
            apply: [],
            contact: {},
            selected: ""
        },
        editing = {
            state: false,
            id: ""
        },
        price = {
            $el: $("#order-money"),
            before: 0,
            now: 0
        },
        urls = {
            coupon: "../json/data.json"
        };




    var $addBox = $(".apply-box"),
        $applyForm = $(".apply-form"),
        summaryTpl = "tpl-summary",
        $summaryBox = $("#box-summary"),
         selectTpl = "tpl-select",
        $selectBox = $("#box-select"),
        $goPay = $("#gopay"),
        $addApply = $("#add-apply"),
        $addSubmit = $("#addapply-submit"),
        $addCancel = $("#addapply-cancel"),
        $apply = {
            name: $("#apply-name"),
            idcard: $("#apply-idcard"),
            tel: $("#apply-tel"),
            email: $("#apply-email"),
            coupon: $("#apply-coupon")
        },
        $contact = {
            name: $("#contact-name"),
            idcard: $("#contact-idcard"),
            tel: $("#contact-tel"),
            email: $("#contact-email")
        };


    //点击添加申请人
    $addApply.on("click", addShow);
    $addCancel.on("click", function() {
        if (editing.state) {
            editing.state = false;
            editing.id = "";
            formatForm($apply);
        }
        addHide();
    });



    $applyForm.find("input").focus(function(){
        $(this).siblings(".tip").html(" ");
    })
    $applyForm.find("select").focus(function(){
        $(this).parents($applyForm).find(".tip").html(" ");
    })

    $addSubmit.on("click", function(){
        var vals = getVals($apply);
        if (!ns.check.name(vals.name)) {
            $("#apply-name").siblings(".tip").html("请输入正确的姓名！");
            return false;
        }
        if (!ns.check.idcard(vals.idcard)) {
            $("#apply-idcard").siblings(".tip").html("请输入正确的身份证号！");
            return false;
        }
        if (!ns.check.tel(vals.tel)) {
            $("#apply-tel").siblings(".tip").html("请输入正确的手机号码！");
            return false;
        }
        if (!ns.check.email(vals.email)) {
            $("#apply-email").siblings(".tip").html("请输入正确的email地址！");
            return false;    
        }
        if ( ns.check.empty(vals.coupon) ){
            addApply();
            return false;
        } else {
            var hasRepeat = false;
            $.each(users.apply,function(i,v){
                if (v.coupon === vals.coupon && editing.id !== ""+i) {
                    $("#apply-coupon").siblings(".tip").html("该优惠码已被" + v.name + "使用！");
                    hasRepeat = true;
                }
            })
            if ( hasRepeat ){
                return false;
            }
        }

    });


    function addShow() {
        $addBox.fadeIn(250);
    }

    function addHide() {
        $addBox.hide();
    }


    //编辑
    $summaryBox.on("click", ".order-edit-edit", function() {
        var id = $(this).parents("li").attr("data-id");
        editing.state = true;
        editing.id = id;
        formatForm($apply, users.apply[id]);
        addShow();
    });
    //删除
    $summaryBox.on("click", ".order-edit-del", function() {
        var id = $(this).parents("li").attr("data-id");
        users.apply.splice(id, 1);
        formatUsers(id);
    });



    //添加或修改完成之后执行
    function addApply() {
        var vals = getVals($apply);
        if (editing.state) {
            users.apply[editing.id] = vals;

        } else {
            users.apply.push(vals);
        }
        formatUsers();
    }


    //格式化申请人信息
    function formatUsers(del) {
        var apply = users.apply;
        $summaryBox.html(ns.tpl(summaryTpl, users));
        $selectBox.html(ns.tpl(selectTpl, users));
        if (users.selected === del) {
            $selectBox.val("");
            changeContactInput(false);
        } else if (users.selected === editing.id) {
            $selectBox.val(users.selected).trigger("change");
        }
        if ( editing.state){
            editing.state = false;
            editing.id="";
        }
        addHide();
        //formatForm($apply); //清空添加申请人的表单。测试用注释掉
    };

    function formatForm($els, apply) {
        var apply = apply === undefined ? true : apply;
        for (var i in $els) {
            if (apply === true) {
                $els[i].val("");
            } else {
                $els[i].val(apply[i] || "");
            }

        }
    }


    //选择联系人
    $selectBox.on("change", function() {
        var val = $selectBox.val();
        if (val === "") {
            formatForm($contact);
            changeContactInput(false);
        } else {
            formatForm($contact, users.apply[val]);
            changeContactInput(true);
        }
        users.selected = val;
    });

    //点击提交订单
    $goPay.on("click", function() {
        if (users.apply.length === 0) {
            art.dialog('请添加申请人！');
            return false;
        }
        if (users.selected === "") {
            var _contact = getVals($contact);
            if (!ns.check.name(_contact.name)) {
                $("#contact-name").siblings(".tip").html("请输入正确的联系人姓名！");
                return false;
            }
            if (!ns.check.idcard(_contact.idcard)) {
                $("#contact-idcard").siblings(".tip").html("请输入正确的联系人身份证号！");
                return false;
            }
            if (!ns.check.tel(_contact.tel)) {
                $("#contact-tel").siblings(".tip").html("请输入正确的联系人手机号！");
                return false;
            }
            if (!ns.check.email(_contact.email)) {
                $("#contact-email").siblings(".tip").html("请输入正确的联系人邮箱！");
                return false;
            }
            users.contact = _contact;
        }else{
            users.contact = users.apply[users.selected];
        }
        console.log(users);
        //提交订单
        model(this);
        return false;
    });


    function changeContactInput(state) {
        for (var i in $contact) {
            $contact[i].prop("disabled", state);
        }
    }


    function getVals($els) {
        var vals = {};
        for (var i in $els) {
            vals[i] = $els[i].val()
        }
        return vals;
    }

    //页面初始化
    function init(){
        formatUsers();
        formatForm($contact,users.contact);
    }
    init();


});