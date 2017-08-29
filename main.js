require('NSURL');
defineClass('SocialCollectionViewCell', {
    setImageURL: function(imageURL) {
        var after = 0;
        imageURL = imageURL.stringByReplacingOccurrencesOfString_withString("&640h_640w_1e", "");
        if (self.needDelay()) {
            after = 0.7;
        }
        self.imageInCell().yy_setImageWithURL_placeholder_options_progress_transform_completion(NSURL.URLWithString(imageURL), null, 4096, null, block('UIImage*,NSURL*', function(image, url) {
            return image.rm_resizedImageBySize( 
            {width:self.itemSize().width,height:self.itemSize().height}
        }), null);
    },
});

require('RMUsersService,NSError,NSArray,NSIndexSet');
defineClass('HomeViewController', {

    requestRecommendUsers: function() {
        console.log("reqStart");
        var weakSelf = __weak(self);

        RMUsersService.requestHotUsersWithPage_withPageSize_withPlatform_resultBlock(1, 3, "", block('id', function(obj) {
            console.log("reqStart In");
            weakSelf.requsetCount ++;
            if (obj.isKindOfClass(NSError.class())) {} else {
                weakSelf.setRecommendedUsers(NSArray.arrayWithArray(obj));
                weakSelf.containerTableView().reloadSections_withRowAnimation(NSIndexSet.indexSetWithIndex(1), 5);
            }
        }));

    },

    isFristStartApp: function() {
        return NO;
    },
});

defineClass('ActivityViewController', {
    isFristStartApp: function() {
        return NO;
    },
});

defineClass('SocialMoreViewController', {
    isFristStartApp: function() {
        return NO;
    },
}); 

defineClass('AppDelegate', {
    configOnboardingPage: function() {
        console.log("ConfigLogin");
         self.setValue_forKey(null, "nav");     //set member variables
        console.log("给nav 赋值成功");

        self.ORIGconfigOnboardingPage();
    },
});    