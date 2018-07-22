INSERT INTO `survey_creator`.`survey_user`(`password`,`username`,`email`,`blocked`) VALUES ('admin','admin','admin@email.com',false);
INSERT INTO `survey_creator`.`survey_user_role`(`type`) VALUES ('ROLE_ADMIN');
INSERT INTO `survey_creator`.`survey_user_roles`(`fk_survey_user`,`fk_survey_user_role`)VALUES(1, 1);
INSERT INTO `survey_creator`.`survey_user_role`(`type`) VALUES ('ROLE_USER');
INSERT INTO `survey_creator`.`survey_user_roles`(`fk_survey_user`,`fk_survey_user_role`)VALUES(1, 2);

INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('PUBLIC');
INSERT INTO `survey_creator`.`survey_privacy`(`privacy_type`) VALUES ('RESTRICTED');

INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('OPEN');
INSERT INTO `survey_creator`.`survey_status`(`survey_status_type`) VALUES ('CLOSED');

INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey1','2018-10-17',1,1,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey2','2018-10-17',1,1,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey3','2018-10-17',1,1,1);
INSERT INTO `survey_creator`.`survey`(`survey_description`,`survey_expire_date`,`fk_survey_user`,`fk_survey_status`,`fk_survey_privacy`)VALUES('Description of demo Survey4','2018-10-17',1,1,1);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',1);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question4','SINGLE_ANSWER',1);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',2);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',2);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',2);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',3);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',3);

INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question1','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question2','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question3','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question4','SINGLE_ANSWER',4);
INSERT INTO `survey_creator`.`survey_question`(`text`,`question_type`,`fk_survey`) VALUES ('Question5','SINGLE_ANSWER',4);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',1);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',1);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',2);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',2);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',2);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',3);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer3',4);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer4',4);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',5);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',5);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',6);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',6);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer3',6);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',7);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',7);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer3',7);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer4',7);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer5',7);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',8);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',9);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',9);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',10);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',10);

INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',11);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',12);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',12);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer3',12);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',13);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',13);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer3',13);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer4',13);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer1',14);
INSERT INTO `survey_creator`.`survey_answer`(`text`,`fk_survey_question`) VALUES ('Answer2',14);
