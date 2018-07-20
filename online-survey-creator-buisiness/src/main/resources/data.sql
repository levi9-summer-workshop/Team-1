INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_ADMIN');
INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_USER');
INSERT INTO `survey_creator`.`role`(`type`) VALUES ('ROLE_BLOCKED');

INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`blocked`) VALUES ('admin','admin','admin@email.com',false);
INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`blocked`) VALUES ('user','user','user@email.com',false);

INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(1, 1);
INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(1, 2);
INSERT INTO `survey_creator`.`survey_user_roles`(`user_id`,`role_id`)VALUES(2, 2);

INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('PUBLIC');
INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('RESTRICTED');

INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('OPEN');
INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('CLOSED');

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey1','2018-10-17',1,1,1);

INSERT INTO `survey_creator`.`survey_question`(`question_type`,`text`,`fk_survey`) VALUES ('SINGLE_ANSWER','Question1',1);
INSERT INTO `survey_creator`.`survey_question`(`question_type`,`text`,`fk_survey`) VALUES ('SINGLE_ANSWER','Question2',1);
INSERT INTO `survey_creator`.`survey_question`(`question_type`,`text`,`fk_survey`) VALUES ('MULTIPLE_ANSWERS','Question3',1);
INSERT INTO `survey_creator`.`survey_question`(`question_type`,`text`,`fk_survey`) VALUES ('SINGLE_ANSWER','Question4',1);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer1',1);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer2',1);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer3',1);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer4',1);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer1',2);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer2',2);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer3',2);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer1',3);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer2',3);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer1',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer2',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer3',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer4',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_question`) VALUES ('Answer5',4);

