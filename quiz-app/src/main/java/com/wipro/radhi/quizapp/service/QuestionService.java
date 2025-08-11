package com.wipro.radhi.quizapp.service;

import java.util.List;

import com.wipro.radhi.quizapp.entity.Question;

public interface QuestionService {
    Question saveQuestion(Question question);
    List<Question> getAllQuestions();
    Question getQuestionById(Long id);
    void deleteQuestion(Long id);
}
