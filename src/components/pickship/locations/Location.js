import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, ModalTitle as Title } from "react-bootstrap";

export default function Location ({ location }) {
    return (
        <Card>
            <Card.Section>
                <Title>{location.name}</Title>
            </Card.Section>
        </Card>
  )

    }