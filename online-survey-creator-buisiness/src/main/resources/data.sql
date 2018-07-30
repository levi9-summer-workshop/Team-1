INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`blocked`) VALUES ('admin','admin','admin@email.com',false);
INSERT INTO `survey_creator`.`survey_user_role`(`type`) VALUES ('ROLE_ADMIN');
INSERT INTO `survey_creator`.`survey_user_roles`(`fk_survey_user`,`fk_survey_user_role`)VALUES(1, 1);
INSERT INTO `survey_creator`.`survey_user_role`(`type`) VALUES ('ROLE_USER');
INSERT INTO `survey_creator`.`survey_user_roles`(`fk_survey_user`,`fk_survey_user_role`)VALUES(1, 2);

INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`blocked`) VALUES ('user','user','user@email.com',false);
INSERT INTO `survey_creator`.`survey_user_role`(`type`) VALUES ('ROLE_USER');
INSERT INTO `survey_creator`.`survey_user_roles`(`fk_survey_user`,`fk_survey_user_role`)VALUES(2, 3);

INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('PUBLIC');
INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('RESTRICTED');

INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('OPEN');
INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('CLOSED');


INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey1','2018-10-17',1,2,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey2','2018-10-17',1,1,2);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey3','2018-10-17',1,1,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey4','2018-10-17',1,1,1);


INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','MULTIPLE_ANSWERS',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question4','MULTIPLE_ANSWERS',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question5','MULTIPLE_ANSWERS',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question6','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question7','MULTIPLE_ANSWERS',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question8','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question9','MULTIPLE_ANSWERS',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question10','MULTIPLE_ANSWERS',1);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',2);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','MULTIPLE_ANSWERS',2);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',2);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',3);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',3);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question4','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question5','SINGLE_ANSWER',4);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',1,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',1,0);


INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',2,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',2,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',2,0);


INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',3,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',3,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',3,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',4,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',4,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',4,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer4',4,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',5,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',5,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',6,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',6,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',6,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',7,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',7,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',7,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer4',7,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer5',7,0);


INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',8,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',9,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',9,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',10,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',10,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',11,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',12,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',12,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',12,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',13,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',13,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',13,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer4',13,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',14,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',14,0);

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey1','2018-10-17',2,1,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey2','2018-10-17',2,1,2);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',5);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',5);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',5);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question4','SINGLE_ANSWER',5);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',6);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',6);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',6);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',15,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',15,0);


INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',16,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',16,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',17,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',18,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',18,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',18,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',19,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',19,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',20,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',20,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',20,0);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer1',21,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer2',21,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer3',21,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer4',21,0);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`,`result`) VALUES ('Answer4',21,0);