INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_ADMIN');
INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_USER');
INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_BLOCKED');

INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`is_blocked`) VALUES ('admin','admin','admin@email.com',false);
INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`is_blocked`) VALUES ('user','user','user@email.com',false);

INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(1, 1);
INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(1, 2);
INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(2, 2);