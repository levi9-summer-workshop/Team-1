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

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('With this poll we want to find out how you and your peers think about food when it comes to good health','2018-10-17',1,1,1);

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

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('The results of this survey will teach us insights in how we can provide you with healthier food options. Your answers will remain completely anonymous  ','2018-10-17',2,1,1);

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

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Yes, we realize how precious your time is. Thats why we made sure this survey will not take longer than 30 seconds (really, we timed it!)','2018-10-17',1,1,1);

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

