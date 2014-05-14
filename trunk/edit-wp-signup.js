jQuery( document ).ready(function() {

console.log(jQuery('body').attr('class'));

if ('#blog_template-selection') {
	console.log('ok');

}

jQuery('#blog_template-selection').children('h3').text('Online shared systems');

if (jQuery('body').hasClass('logged-in')) {

	jQuery("<div class='new-site'>").insertBefore('#blogname');

	var urlBlog = jQuery('#blogname');
	var tituloBlog = jQuery('#blog_title');

	jQuery('#blogname').remove();
	jQuery('#blog_title').remove();

	jQuery( ".new-site" ).append( urlBlog );
	jQuery( ".new-site" ).append( tituloBlog );
	
	jQuery('#blog_template-selection').children('h3').remove();
	
	var blogName = jQuery("label[for='blogname']").text();
	jQuery("label[for='blogname']").remove();
	console.log( 'blogname' + blogName );
  
	if ( jQuery('.prefix_address').text() ) {
		var prefixAddress = jQuery('.prefix_address').text();
		jQuery('.prefix_address').remove();
		console.log(prefixAddress);
	jQuery('#blogname').watermark('Your domain:' + " " +prefixAddress);
	} else {
		var suffixAddress = jQuery('.suffix_address').text();
		jQuery('.suffix_address').remove();
		console.log(suffixAddress);  
		jQuery('#blogname').watermark(blogName + " " + suffixAddress);
	}
  
	var blogTitle = jQuery("label[for='blog_title']").text();
	jQuery("label[for='blog_title']").remove();
	jQuery('#blog_title').css('margin-top','10px');
	console.log(blogTitle);

	jQuery('#blog_title').watermark('Site Title');

	var userName = jQuery("label[for='user_name']").text();
	jQuery("label[for='user_name']").remove();
	console.log(userName);

	jQuery('#user_name').watermark(userName);

	var userEmail = jQuery("label[for='user_email']").text();
	jQuery("label[for='user_email']").remove();
	console.log(userEmail);

	jQuery('#user_email').watermark(userEmail);

	jQuery('.mu_register').children('p').eq(0).remove();
	jQuery('.mu_register').children('p').eq(1).remove();
	jQuery('.mu_register').children('p').eq(2).remove();

	jQuery('.mu_register').children('p').eq(0).remove();//weird but worked
	
	jQuery('<strong>Your site(s) +view</strong>').insertBefore( jQuery('.mu_register').children('ul') ).addClass('your-sites');
	
	jQuery('.mu_register').children('ul').hide();
	
	//on click your sites, appear the list
	jQuery('.your-sites').click( function(){
		jQuery('.mu_register').children('ul').fadeToggle();
	});
	
	jQuery('#setupform').children('br').remove();
	
	console.log( jQuery('.your-sites').prev() );
	jQuery('.your-sites').prev().css('float','left');
	
	jQuery('input.submit').css('padding','5px 10px');
	
	jQuery('p.submit').css({
	   top : '130px',
	   right : '4.5%'
	});
	
	// arranging 'ul' or .your-sites
	jQuery('.your-sites').next().addClass('sites-list');
	
	console.log (jQuery('.your-sites').next() );
	

} else {

	//jQuery('.mu_register').children('h2').text('Get your userDev system')
	jQuery('#blog_template-selection').children('h3').remove();
	
	// starting user subscription

	jQuery("<div class='new-user'>").insertBefore('#user_name');
	
	// inserting text inputs inside new-user div
	var nomeUser = jQuery('#user_name');
	var emailUser = jQuery('#user_email');
	var pass1 = jQuery('#password_1');
	var pass2 = jQuery('#password_2');
	
	jQuery('#user_name').remove();
	jQuery('#user_email').remove();
	jQuery('#password_1').remove();
	jQuery('#password_2').remove();
	
	jQuery( ".new-user" ).append("<div class='user-name-email'></div>");
	jQuery( ".new-user" ).append("<div class='user-pass'></div>");
	jQuery( ".user-name-email" ).append( nomeUser );
	jQuery( ".user-name-email" ).append( emailUser );
	jQuery( ".user-pass" ).append( pass1 );
	jQuery( ".user-pass" ).append( pass2 );
	
	// username (At least 4 characters. Letters and numbers only.)
	var userName = jQuery("label[for='user_name']").text();
	jQuery("label[for='user_name']").remove();
	console.log(userName);

	jQuery('#user_name').watermark('Username');

	// email (double-check it before continuing)
	var userEmail = jQuery("label[for='user_email']").text();
	jQuery("label[for='user_email']").remove();
	console.log(userEmail);

	jQuery('#user_email').watermark('Email');
	
	var userPass = jQuery("label[for='password']").text();
	jQuery("label[for='password']").remove();
	console.log(userPass);

	jQuery('#password_1').watermark('Password (blank for random)');
	
	// confirm password (Type your new password again)
	var userPass = jQuery("label[for='password']").text();
	jQuery("label[for='password']").remove();
	console.log(userPass);

	jQuery('#password_2').watermark('Confirm Password');
	
	jQuery('.user-pass').next().css('float','left');
	
	jQuery('input.submit').css({
	   padding : '5px 20px'
	});
	
	jQuery('p.submit').css({
	   top : '100px',
	   right : '60px'
	});

	// end of user subscription
	
	
	// remove unwrapped texts
	
	console.log( jQuery('form#setupform').children() );
	console.log( jQuery('form#setupform').contents() );
	
	var wrappedFormChildren = jQuery('form#setupform').children();
	
	jQuery('form#setupform').text('');
	
	jQuery('form#setupform').append( wrappedFormChildren );
	
	// end of removing unwrapped texts
	
	
	// starting site subscription
	
	jQuery("<div class='new-site'>").insertBefore('#blogname');

	var urlBlog = jQuery('#blogname');
	var tituloBlog = jQuery('#blog_title');

	jQuery('#blogname').remove();
	jQuery('#blog_title').remove();

	jQuery( ".new-site" ).append( urlBlog );
	jQuery( ".new-site" ).append( tituloBlog );

	
	
	var blogName = jQuery("label[for='blogname']").text();
	
	console.log( 'blogname' + blogName );
	
	
	if ( jQuery('.prefix_address').text() ) {
		var prefixAddress = jQuery('.prefix_address').text();
		jQuery('.prefix_address').remove();
		console.log(prefixAddress);
		jQuery('#blogname').watermark('Your domain:' + " " + prefixAddress);
		jQuery("label[for='blogname']").text('Site Domain: ' + prefixAddress);
	} else {
		var suffixAddress = jQuery('.suffix_address').text();
		jQuery('.suffix_address').remove();
		console.log(suffixAddress);  
		jQuery('#blogname').val('');
		jQuery('#blogname').watermark( "subdomain" + suffixAddress );
		jQuery("label[for='blogname']").text('yoursubdomain' + suffixAddress);
	}
	
	jQuery("label[for='blogname']").css({
	   margin : '27px 0 0 10px',
	   float : 'left',
	   color: 'darkblue'
	});	

	var blogTitle = jQuery("label[for='blog_title']").text();
	jQuery("label[for='blog_title']").remove();
	jQuery('#blog_title').css('margin-top','10px');
	console.log(blogTitle);

	jQuery('#blog_title').watermark( 'Site Title' );

	jQuery('#setupform').children('br').remove();

	console.log( jQuery('.new-site').next() );
	jQuery('.new-site').next().remove();
	
	jQuery("<h2 style='float:left;'>Get your website for free</h2>").insertBefore("label[for='blogname']").parent();
	
	// end of site subscription
	
	// rearranging submit

	jQuery('#blog_template-selection').next('p').addClass('gimme-site');
	
	var gimmeSite = jQuery('#setupform').children('.gimme-site');
	
	jQuery('#setupform').children('gimme-site').remove();
	
	//jQuery('.new-site').append(tagP);
	jQuery('.new-user').append( gimmeSite );
  
};


// removing a paragraph after sites-list when has an error
console.log( jQuery('.sites-list').next('p') );
jQuery('.sites-list').next('p').remove();

// managing error div, the ifs are not working, it understand them always appearing
if ('.new-site') {
	jQuery( '.new-site' ).append( jQuery('p.error') );
}; 

if ('.new-user'){
	jQuery( '.new-user' ).append( jQuery('p.error') );
};

// look for children index get all the children until the last p tag, after append them and insert absolute position

jQuery("<div class='signup-finished'>").insertBefore( jQuery( '#noemail-tips' ).parent() );
jQuery('.signup-finished').append( jQuery( '#noemail-tips' ).parent().children().slice(0, 8) );

if ('#noemail-tips') {
	//jQuery('#content').append( jQuery('#blog_template-selection') );
};

 
 
});
