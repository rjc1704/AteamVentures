import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import RequestCard from "./RequestCard";
import EmptyList from "./EmptyList";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: stretch space-between;
  width: 100%;
  @media (max-width: 942px) {
    margin-top: 3em;
  }
`;

export default function RequestCardList({
  status,
  selectedMethod,
  selectedMaterial,
}) {
  const [cards, setCards] = useState([]);
  const url = "http://localhost:3000/requests";
  console.log(`selectedMethod in 22: `, selectedMethod);
  console.log(`selectedMaterial in 23:`, selectedMaterial);
  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        return res.data;
      })
      .then((resData) => {
        let methodFiltered = [];
        let materialFiltered = [];
        let statusFiltered = [];
        //! 가공방식 필터가 존재하는 경우
        if (selectedMethod.length > 0) {
          // 선반
          resData.forEach((card) => {
            card.method.forEach((cardMethod) => {
              selectedMethod.forEach((selected) => {
                if (cardMethod === selected) {
                  if (
                    methodFiltered.length > 0 &&
                    card.id !== methodFiltered[methodFiltered.length - 1].id
                  ) {
                    methodFiltered.push(card);
                  } else if (methodFiltered.length === 0)
                    methodFiltered.push(card);
                }
              });
            });
          });
          //? 가공방식 필터와 재료 필터가 둘다 존재하는 경우
          if (selectedMaterial.length > 0) {
            //알루미늄
            methodFiltered.forEach((card) => {
              card.material.forEach((cardMaterial) => {
                selectedMaterial.forEach((selected) => {
                  if (cardMaterial === selected) {
                    if (
                      materialFiltered.length > 0 &&
                      card.id !==
                        materialFiltered[materialFiltered.length - 1].id
                    ) {
                      materialFiltered.push(card);
                    } else if (materialFiltered.length === 0)
                      materialFiltered.push(card);
                  }
                });
              });
            });
            //? 가공방식과 재료 필터를 둘다 걸었을 때 교집합 시 0개 나오면 빈배열로 리턴
            if (materialFiltered.length === 0) return setCards([]);
            //? 가공방식 필터, 재료 필터, 토글 필터 모두 있는 경우
            if (status) {
              statusFiltered = materialFiltered.filter(
                (card) => card.status === "상담중"
              );
              return setCards(statusFiltered);
            } else {
              //? 가공방식 필터와 재료 필터만 있는 경우 리턴
              return setCards(materialFiltered);
            }
          } else {
            //! 가공방식 필터와 토글 필터만 있는 경우
            if (status) {
              statusFiltered = methodFiltered.filter(
                (card) => card.status === "상담중"
              );
              return setCards(statusFiltered);
            }
            //! 가공방식 필터만 있는 경우
            return setCards(methodFiltered);
          }
        }
        //! 가공방식 필터는 없고 재료 필터만 있는 경우
        if (selectedMaterial.length > 0) {
          resData.forEach((card) => {
            card.material.forEach((cardMaterial) => {
              selectedMaterial.forEach((selected) => {
                if (cardMaterial === selected) {
                  if (
                    materialFiltered.length > 0 &&
                    card.id !== materialFiltered[materialFiltered.length - 1].id
                  ) {
                    materialFiltered.push(card);
                  } else if (materialFiltered.length === 0)
                    materialFiltered.push(card);
                }
              });
            });
          });
          //? 재료 필터와 토글 필터가 존재하는 경우
          if (status) {
            statusFiltered = materialFiltered.filter(
              (card) => card.status === "상담중"
            );
            return setCards(statusFiltered);
          } else {
            //? 재료 필터만 존재하는 경우
            return setCards(materialFiltered);
          }
        }
        //! status 필터만 있는 경우
        if (status) {
          statusFiltered = resData.filter((card) => card.status === "상담중");
          return setCards(statusFiltered);
        } else {
          //! 아무런 필터가 없는 경우
          setCards(resData);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [status, selectedMethod, selectedMaterial]);
  return (
    <>
      {cards.length === 0 ? (
        <EmptyList />
      ) : (
        <ListWrapper>
          {cards.map((card, idx) => {
            return <RequestCard key={idx} item={card} />;
          })}
        </ListWrapper>
      )}
    </>
  );
}
