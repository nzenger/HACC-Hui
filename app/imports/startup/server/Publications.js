import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { HACCHui } from '../../api/hacc-hui/HACCHui';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { Skills } from '../../api/skill/SkillCollection';

// Publish all the collections you need.
_.forEach(HACCHui.collections, (collection) => collection.publish());

// Deprecated
Stuffs.publish();

// Need this for the alanning:roles package
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
Meteor.publish('allSkills', function publish() {
  return Skills.find({});
  return this.ready();
});
