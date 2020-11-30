import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Dialog, Layout, SizeBox } from 'react-native-noxi';

const DialogScreen = ({ navigation }) => {
  const [showDialog1, setshowDialog1] = useState(false);
  const [showDialog2, setshowDialog2] = useState(false);
  const [showDialog3, setshowDialog3] = useState(false);
  const [showDialog4, setshowDialog4] = useState(false);

  return (
    <Layout
      title="Dialogs"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <Button size="normal" onPress={() => setshowDialog1(true)}>
        show dialog 1
      </Button>
      <Dialog
        show={showDialog1}
        title="Title"
        header={
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri:
                'https://img2.freepng.es/20180404/lzq/kisspng-template-logo-company-speedometer-5ac566f9861781.2270677415228863935493.jpg',
            }}
          />
        }
      >
        <Button size="small" onPress={() => setshowDialog1(false)}>
          close
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog2(true)}>
        show dialog 2
      </Button>
      <Dialog show={showDialog2} title="Title">
        <Button size="small" onPress={() => setshowDialog2(false)}>
          close
        </Button>
        <Button size="small" onPress={() => setshowDialog2(false)}>
          ok
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog3(true)}>
        show dialog 3
      </Button>
      <Dialog
        show={showDialog3}
        title="LOL"
        message="long very long message that says something that is matter"
      >
        <Button size="small" onPress={() => setshowDialog3(false)}>
          ok
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog4(true)}>
        show dialog 4
      </Button>
      <Dialog
        show={showDialog4}
        backgroundColorOverlay="red"
        title="Red bg"
        message="change overlay"
      >
        <Button size="small" onPress={() => setshowDialog4(false)}>
          ok
        </Button>
      </Dialog>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DialogScreen;
