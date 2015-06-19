fun.views.signup = Backbone.View.extend({

    /*
     * Bind the events functions to the different HTML elements
     */
    events : {
        'click #login-btn': 'login',
        'click #signup-btn': 'signup'
    },
    
    /*
     * Class constructor
     */
    initialize : function(options) {
        fun.containers.signup = this.$el;
    },
    
    /*
     * Renders the signup view
     */
    render : function(){
        'use strict';
        var template;
        if (!this.$el.html()){
            template = _.template(fun.utils.getTemplate(fun.conf.templates.signup));
            this.$el.html(template);

            // Cache the DOM stuff
            this.signupError = this.$('#signup-error');

            // Form inputs
            this.account = this.$('#reg_signup_username');
            this.firstname = this.$('#reg_signup_firstname');
            this.newAccount = this.account;
            this.email = this.$('#reg_signup_email');
            this.phone = this.$('#reg_signup_phone');
            this.password = this.$('#reg_signup_password');
            this.confirmPassword = this.$('#reg_confirm_password');

            this.companyName = this.$('#reg_company_name');
            this.streetAddress = this.$('#reg_street_address');
            this.cityTown = this.$('#reg_city_town');
            this.stateProvince = this.$('#reg_state_province');
            this.zipPostal = this.$('#reg_zip_postal');
            this.countryCompany = this.$('#reg_country_company');
            this.dba = this.$('#reg_dba');
            this.telephone = this.$('#reg_telephone');
            this.fax = this.$('#reg_fax');
            this.companyEmail = this.$('#reg_company_email');
            this.incorporatedNumber = this.$('#reg_incorporated_number');
            this.legalCompanyName = this.$('#reg_legal_company_name');
            this.dateOfIncorporation = this.$('#reg_date_incorporation');
            this.incorporatedAddress = this.$('#reg_incorporated_address');
            this.incorporatedStateProvince = this.$('#reg_incorporated_state');
            this.incorporatedCountry = this.$('#reg_incorporated_country');
            this.federalTaxId = this.$('#reg_federal_tax_id');
            this.vatTaxIdFileNumber = this.$('#reg_vat_tax_id');
            this.ifCompanySubsidiaryName = this.$('#reg_subsidiary_name');
            this.ifCompanySubsidiaryRegistrationNum = this.$('#reg_subsidiary_reg_num');
        }
        this.$el.show();
    },
    
    /*
     * login event
     */
    login: function() {
        window.location = fun.conf.hash.login;
    },
    
    /*
     * signup event
     */
    signup: function(event){
        'use strict';
        var signupError,
            account,
            firstname,
            password,
            confirmPassword,
            email,
            phone,
            companyName,
            streetAddress,
            cityTown,
            stateProvince,
            zipPostal,
            countryCompany,
            dba,
            telephone,
            fax,
            companyEmail,
            incorporatedNumber,
            legalCompanyName,
            dateOfIncorporation,
            incorporatedStateProvince,
            incorporatedAddress,
            incorporatedNumber,
            incorporatedCountry,
            federalTaxId,
            vatTaxIdFileNumber,
            ifCompanySubsidiaryName,
            ifCompanySubsidiaryRegistrationNum,
            view,
            rules,
            validationRules,
            callbacks,
            validForm;

        event.preventDefault();

        signupError = this.signupError;
        account = this.account.val();
        firstname = this.firstname.val();
        password = this.password.val();
        confirmPassword = this.confirmPassword.val();
        email = this.email.val();
        phone = this.phone.val();

        companyName = this.companyName.val();
        streetAddress = this.streetAddress.val();
        cityTown = this.cityTown.val();
        stateProvince = this.stateProvince.val();
        zipPostal = this.zipPostal.val();
        countryCompany = this.countryCompany.val();
        dba = this.dba.val();
        telephone = this.telephone.val();
        fax = this.fax.val();
        companyEmail = this.companyEmail.val();
        incorporatedNumber = this.incorporatedNumber.val();
        legalCompanyName = this.legalCompanyName.val();
        dateOfIncorporation = this.dateOfIncorporation.val();
        incorporatedStateProvince = this.incorporatedStateProvince.val();
        incorporatedAddress = this.incorporatedAddress.val();
        incorporatedNumber = this.incorporatedNumber.val();
        incorporatedCountry = this.incorporatedCountry.val();
        federalTaxId = this.federalTaxId.val();
        vatTaxIdFileNumber = this.vatTaxIdFileNumber.val();
        ifCompanySubsidiaryName = this.ifCompanySubsidiaryName.val();
        ifCompanySubsidiaryRegistrationNum = this.ifCompanySubsidiaryRegistrationNum.val();

        // check if this view stuff is really needed
        view = this;
        // form validation rules
        
        //'''
        //    reg_street_address');
        //    this.cityTown = this.$('#reg_city_town');
        //    this.stateProvince = this.$('#reg_state_province');
        //    this.zipPostal = this.$('#reg_zip_postal');
        //    this.countryCompany = this.$('#reg_country_company');
        //    this.dba = this.$('#reg_dba');
        //    this.telephone = this.$('#reg_telephone');
        //    this.fax = this.$('#reg_fax');
        //    this.companyEmail = this.$('#reg_company_email');
        //    this.legalCompanyName = this.$('#reg_legal_company_name');
        //'''
        
        rules = {
            rules: {
                reg_signup_username: {
                    minlength: 2,
                    required: true
                },
                reg_signup_email: {
                    required: true,
                    email: true
                },
                reg_signup_password: {
                    minlength: 6,
                    required: true
                },
                reg_confirm_password: {
                    required: false,
                    minlength: 6,
                    equalTo: '#reg_signup_password'
                },
                reg_company_name: {
                    minlength: 6,
                    required: true
                },
                reg_street_address: {
                    minlength: 6,
                    required: true
                },
                reg_city_town: {
                    minlength: 6,
                    required: true
                },
                reg_state_province: {
                    minlength: 6,
                    required: true
                },
                reg_zip_postal: {
                    minlength: 6,
                    required: true
                },
                reg_country_company: {
                    minlength: 6,
                    required: true
                },
                reg_dba: {
                    minlength: 6,
                    required: true
                },
                reg_telephone: {
                    minlength: 6,
                    required: true
                },
                reg_fax: {
                    minlength: 6,
                    required: true
                },
                reg_company_email: {
                    minlength: 6,
                    required: true
                },
                reg_legal_company_name: {
                    minlength: 6,
                    required: true
                }

            }
        }
        validationRules = $.extend(rules, fun.utils.validationRules);

        $('#signup-form').validate(validationRules);
        
        // new user account callbacks
        callbacks = {
            success: function(){
                // Clear the stuff from the inputs ;)
                view.$('#signup_username').val('');
                view.$('#signup_firstname').val('');
                view.$('#signup_email').val('');
                view.$('#signup_phone').val('');
                view.$('#signup_password').val('');
                view.$('#confirm_password').val('');
                signupError.hide();
                // login the created user
                fun.utils.login(account, password,
                    {
                        success : function(xhr, status){
                            $('#signupModal').modal('hide');
                            fun.utils.redirect(fun.conf.hash.dashboard);
                        },
                        error : function(xhr, status, error){
                            // aqui es donde tiene sentido 
                            // enviar al dude a login con un error.
                            fun.utils.redirect(fun.conf.hash.login);
                        }
                    }
                );
            },

            error: function(model, error){
                // Catch duplicate errors or some random stuff
                signupError.show();
                // TODO: on error add class error and label to the input field
                if (error.responseText.indexOf('account') != -1){
                    signupError.find('p').html('Username is already taken.');
                }
                else if (error.responseText.indexOf('email') != -1){
                    signupError.find('p').html('Email is invalid or already taken.');
                }
                else {
                    signupError.find('p').html('what daa!?');
                }
                
            }
        };
        
        // check for a valid form and create the new user account
        validForm = $('#signup-form').valid();
        if (validForm){
            //event.preventDefault();

            this.model = new fun.models.Account();
            this.model.save(
                {
                    account: account,
                    password: password,
                    email: email
                },
                callbacks
            );
        }
    }
});